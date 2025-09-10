/*
    JSX Rules:
    1) One Component can return only one parent
    2) All tags must be closed
    3) JSX attributes are written using camelCase
    3) className instead of class (class is keyword in Javascript)
    4) htmlFor instead of for (Javascript think for as for loop)
 */

const Welcome = () => {
    return (
        <div>
            <h1>Hello World!</h1>
            <p>Welcome to JSX!</p>
        </div>
    );
}

export default Welcome;