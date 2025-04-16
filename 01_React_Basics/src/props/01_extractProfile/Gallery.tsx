import Profile from "./Profile";

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>

      <Profile
       heading="Maria Skłodowska-Curie"
       profession="physicist and chemist"
       awards=" (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
       discovered="polonium (chemical element)"
      />

      <Profile
        heading="Katsuko Saruhashi"
        profession="geochemist"
        awards="(Miyake Prize for geochemistry, Tanaka Prize)"
        discovered=" a method for measuring carbon dioxide in seawater"
      />

    <Profile>
        <h3>Hi it is a specail jsx prop passed to the child </h3>
        
    </Profile>




        {/* In react every component can accept a special prop called children. Whatever you place inside the component's opeinng and closing tags is passed as prop.children     */}


    </div>
  );
}

