import { Component, OnInit } from '@angular/core';
import { addDoc, collection, getDocs, limit, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase-config';

interface RecipeData {
  name: string;
  description: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  ingredients: Array<{ ingrediente: string; cantidad: string }>;
  instructions: string[];
  authorId?: string;
}

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

    const recipeData: RecipeData = {
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
      const q = query(collection(db, 'recipes'), orderBy('createdAt', 'desc'), limit(5));
      const snapshot = await getDocs(q);
      this.recentRecipes = snapshot.docs.map(doc => {
        const data = doc.data() as Partial<RecipeData>;
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

  async addRecipe(recipeData: RecipeData) {
    const docRef = await addDoc(collection(db, 'recipes'), {
      ...recipeData,
      createdAt: serverTimestamp()
    });
    return docRef.id;
  }

  async addSampleRecipe() {
    const newRecipe: RecipeData = {
      name: 'Spicy Chickpea Curry',
      description: 'A hearty and flavorful vegan curry.',
      prepTime: 15,
      cookTime: 40,
      servings: 6,
      ingredients: [
        { ingrediente: 'Garbanzos', cantidad: '2 latas (escurridos)' },
        { ingrediente: 'Leche de coco', cantidad: '1 lata (400ml)' },
        { ingrediente: 'Cebolla', cantidad: '1 grande, picada' },
        { ingrediente: 'Ajo', cantidad: '3 dientes, picados' },
        { ingrediente: 'Jengibre', cantidad: '1 pulgada, rallado' },
        { ingrediente: 'Curry en polvo', cantidad: '2 cucharadas' },
        { ingrediente: 'Espinaca', cantidad: '200g' }
      ],
      instructions: [
        'Saute onion, garlic, and ginger until fragrant.',
        'Add curry powder and cook for 1 minute.',
        'Stir in chickpeas and coconut milk, bring to a simmer.',
        'Cook for 20 minutes, then add spinach and cook until wilted.'
      ]
    };

    try {
      const id = await this.addRecipe(newRecipe);
      this.message = `Receta agregada con ID: ${id}`;
      await this.loadRecentRecipes();
    } catch {
      this.message = 'No se pudo agregar la receta.';
    }
  }

}
