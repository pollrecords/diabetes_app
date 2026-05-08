import { Component, OnInit } from '@angular/core';
import { addDoc, collection, getDocs, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase-config';

interface RecipePreview {
  id: string;
  name: string;
  description: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  ingredients: Array<{ ingrediente: string; cantidad: string }>;
  instructions: string[];
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage implements OnInit {

  message = '';
  recipeName = '';
  recipeDescription = '';
  prepTime: number | null = null;
  cookTime: number | null = null;
  servings: number | null = null;
  ingredientsText = '';
  instructionsText = '';
  recentRecipes: RecipePreview[] = [];
  expandedId: string | null = null;
  searchQuery = '';

  get filteredRecipes(): RecipePreview[] {
    const q = this.searchQuery.trim().toLowerCase();
    if (!q) return this.recentRecipes.slice(0, 5);
    return this.recentRecipes.filter(r =>
      r.name.toLowerCase().includes(q) || r.description.toLowerCase().includes(q)
    );
  }

  constructor() { }

  ngOnInit() {
    this.loadRecentRecipes();
  }

  async submitRecipe() {
    const name = this.recipeName.trim();
    const description = this.recipeDescription.trim();

    if (!name || !description) {
      this.message = 'Por favor completa el nombre y la descripcion de la receta.';
      return;
    }

    const recipeData: any = {
      name,
      description,
      prepTime: Number(this.prepTime) || 0,
      cookTime: Number(this.cookTime) || 0,
      servings: Number(this.servings) || 0,
      ingredients: this.parseIngredients(this.ingredientsText),
      instructions: this.parseInstructions(this.instructionsText)
    };

    try {
      const id = await this.addRecipe(recipeData);
      this.message = `Receta guardada con ID: ${id}`;
      this.clearForm();
      await this.loadRecentRecipes();
    } catch {
      this.message = 'No se pudo guardar la receta.';
    }
  }

  toggleRecipe(id: string) {
    this.expandedId = this.expandedId === id ? null : id;
  }

  async loadRecentRecipes() {
    try {
      const q = query(collection(db, 'recipes'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      this.recentRecipes = snapshot.docs.map(doc => {
        const data = doc.data() as any;
        return {
          id: doc.id,
          name: data.name || 'Sin nombre',
          description: data.description || 'Sin descripcion',
          prepTime: data.prepTime || 0,
          cookTime: data.cookTime || 0,
          servings: data.servings || 0,
          ingredients: data.ingredients || [],
          instructions: data.instructions || []
        };
      });
    } catch {
      this.recentRecipes = [];
    }
  }

  private parseIngredients(value: string): Array<{ ingrediente: string; cantidad: string }> {
    return value
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .map(line => {
        const [ingrediente, cantidad] = line.split(':').map(part => part.trim());
        return {
          ingrediente: ingrediente || line,
          cantidad: cantidad || ''
        };
      });
  }

  private parseInstructions(value: string): string[] {
    return value
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0);
  }

  private clearForm() {
    this.recipeName = '';
    this.recipeDescription = '';
    this.prepTime = null;
    this.cookTime = null;
    this.servings = null;
    this.ingredientsText = '';
    this.instructionsText = '';
  }

  async addRecipe(recipeData: any) {
    const docRef = await addDoc(collection(db, 'recipes'), {
      ...recipeData,
      createdAt: serverTimestamp()
    });
    return docRef.id;
  }

}
