type GreetProps = {
    name: string
    msgCount: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>
                {
                    props.isLoggedIn ? `welcome ${props.name} ! you have ${props.msgCount} unread messages` : 'Welcome Guest'
                }
            </h2>
        </div>
    )
}

