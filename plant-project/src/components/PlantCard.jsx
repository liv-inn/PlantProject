function PlantCard(){

    function Plant(name, pic, description) {
        this.name = name;
        this.pic = pic;
        this.description = description;
    }

    const plants = [
        new Plant("Fiddle Leaf Fig", "fiddle-leaf-fig.jpg", "A popular indoor plant with large, glossy leaves."),
        new Plant("Snake Plant", "snake-plant.jpg", "A hardy plant that tolerates low light and irregular watering."),
        new Plant("Pothos", "pothos.jpg", "A fast-growing vine that is easy to care for."),
    ];

    return (
        <>
         <div className="flex flex-wrap gap-4 mt-2"> 
               {plants.map((plant, index) => (
                <div key={index} className="bg-gray-100 w-40 h-40 rounded-3xl  p-4 flex flex-col items-center">
                    <img src={plant.pic} alt={plant.name} className="w-24 h-24 mb-2 rounded-full" />
                    <h3 className="text-sm font-light text-[#333333c9]">{plant.name}</h3>
                </div>
            ))}
         </div>
        </>
    );
}
export default PlantCard;