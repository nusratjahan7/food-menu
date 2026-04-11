import Image from "next/image";
import { BiBadge } from "react-icons/bi";
import { FaCarrot, FaFireAlt, FaLeaf, FaSeedling, FaStar } from "react-icons/fa";

const FoodDetails = async ({ params }) => {
    const { foodId } = await params;
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json();
    const food = data.data;

    return (
        <div className="w-11/12 mx-auto my-6">
            
            <div className="col-span-2 space-y-2 bg-gray-900 p-4 rounded-2xl">
                <h1 className="text-4xl font-semibold">{food.dish_name}</h1>
                <p className="flex items-center gap-1 text-lg text-yellow-500"><FaStar /> <span className="text-white ">{food.rating}</span> </p>
                {/* Price & cuisine */}
                <div className="flex gap-6 items-center justify-between">
                    <span className="text-3xl font-bold text-white">৳{food.price}</span>
                    <span className="bg-gray-600 p-2 rounded-2xl text-sm">{food.cuisine}</span>
                </div>

                <div>
                    <h3 className="font-heading text-lg font-semibold text-card-foreground mb-3">Nutrition Per Serving</h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-2">


                        {/* Calories */}
                        <div className="flex flex-col items-center p-4 bg-gray-600 rounded-lg shadow-md">
                            <FaFireAlt className="text-red-500 w-6 h-6" />
                            <p className="font-medium mt-2">Calories</p>
                            <p className="text-gray-300">{food.approximate_nutrition_per_serving.calories}</p>
                        </div>

                        {/* Protein */}
                        <div className="flex flex-col items-center p-4 bg-gray-600 rounded-lg shadow-md">
                            <FaSeedling className="text-green-500 w-6 h-6" />
                            <p className="font-medium mt-2">Protein</p>
                            <p className="text-gray-300">{food.approximate_nutrition_per_serving.protein}</p>
                        </div>

                        {/* Carbs */}
                        <div className="flex flex-col items-center p-4 bg-gray-600 rounded-lg shadow-md">
                            <FaCarrot className="text-orange-500 w-6 h-6" />
                            <p className="font-medium mt-2">Carbs</p>
                            <p className="text-gray-300">{food.approximate_nutrition_per_serving.carbohydrates}</p>
                        </div>

                        {/* Fat */}
                        <div className="flex flex-col items-center p-4 bg-gray-600 rounded-lg shadow-md">
                            <FaFireAlt className="text-red-500 w-6 h-6" />
                            <p className="font-medium mt-2">Fat</p>
                            <p className="text-gray-300">{food.approximate_nutrition_per_serving.fat}</p>
                        </div>

                        {/* Fiber */}
                        <div className="flex flex-col items-center p-4 bg-gray-600 rounded-lg shadow-md">
                            <FaLeaf className="text-green-500 w-6 h-6" />
                            <p className="font-medium mt-2">Fiber</p>
                            <p className="text-gray-300">{food.approximate_nutrition_per_serving.fiber}</p>
                        </div>


                    </div>
                </div>

                {/* Ingredients */}
              <div>
                <h3 className="font-heading text-lg font-semibold text-card-foreground mb-3">Main Ingredients</h3>
                <div className="flex flex-wrap gap-2">
                  {food.main_ingredients.map((ing) => (
                    <div key={ing} className="bg-gray-600 rounded-lg p-3 text-xs ">
                      {ing}
                    </div>
                  ))}
                </div>
              </div>

              {/* Cooking Steps */}
              <div>
                <h3 className="font-heading text-lg font-semibold text-card-foreground mb-3">How It's Made</h3>
                <ol className="space-y-3">
                  {food.cooking_steps.map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="shrink-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center text-xs font-semibold text-primary-foreground">
                        {i + 1}
                      </span>
                      <p className="text-sm text-muted-foreground leading-relaxed pt-0.5">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Origin */}
              <div className="p-4 mt-4 rounded-lg bg-primary/30">
                <h3 className="font-heading text-sm font-semibold  mb-1">Origin & Popularity</h3>
                <p className="text-sm text-muted-foreground">{food.origin_and_popularity}</p>
              </div>

            </div>
        </div>
    );
};

export default FoodDetails;