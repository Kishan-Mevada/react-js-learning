const Greeting = () => {
    const name = "Kishan";
    return(
        <div>
            <h1>Hello {name}, Good Morning!</h1>
            <p>Today's Date is: {new Date().toDateString()}</p>
        </div>
    );
}

export default Greeting;