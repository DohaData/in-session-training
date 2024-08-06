import './MainSection.css';
import reactLogo from "../../assets/react.svg";

function MainSection() {
    const element = <h1>Hello world!</h1>;
    const student = {
        name: "John Doe",
        age: 25,
        isStudent: true,
        imgUrl: reactLogo,
    };
    return (
        <main>
        <h1>Main Section</h1>
        <p>This is the main section of the page.</p>
        {element}
        <p>
            {student.name} is {student.age} years old.
        </p>
        <p>
            {student.isStudent ? "He is a student." : "He is not a student."}
        </p>
        <img src={student.imgUrl} alt="React logo" />
        </main>
    );
    }   // End of MainSection component

export default MainSection;