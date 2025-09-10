const UserList = () => {

    const userList = [
        {id: 1, name: 'John', age: 25},
        {id: 2, name: 'Doe', age: 21},
        {id: 3, name: 'Jonty', age: 50}
    ];

    return (
        <main>
            {
                userList.map(({id, name, age}) => (
                    <div key={id}>
                        <p> Name: {name} </p>
                        <p> Age: {age} </p>
                    </div>
                ))
            }
        </main>
    );
}

export default UserList;