## File Structure
This is the industry standards that are used.
always divide the const data or cdn's(image url's) in utils folder.

and divide all the Components of react in diff file to make code more clean and  to increase readability.


# single page application:
means when a one page application is loaded and just the components gets interchanged.

# Routing
-client side routing.-it is usefull for single page applications.
-server site routing.

{
    path:"/restaurant/:restId",
    In this restId is dynamic it will take input from the path.

    # we can use this input through the hook named as useParam();
}




## Class Based Components (CBC)
=> # how and what to do to make CBC.
{
    class CBC extends React.component{
        constructor(props(input)){
            super(props);

            this.state={

            }
        }
        render(){
            const {name}=this.props;
            const {count}=this.state;
            return (
             ->   {* without destructuring.
                we can use props and hook like this.props.name and this.state.count,etc;

                *with destructuring
                {name}
                {count}}

             ->this.setState({count : count+1});

            )
        }
    }
}

-> we have to declare a class and inherit the React.component class from React pakage.
-> A CBC is made like how we create a class.
-> It takes input from its constructor and return the jsx in its rende().
-> before taking any input we have to put super(props) as we are making a CBC through inheriting from React.component.
-> In a CBC , to create a state variable we did not use hooks, we create a state variable in the constructor.
-> we can destructure input and hook before return and in the render()
-> To manipulate this state variable react provides us a inbuilt function named as this.setState({}); which takes a object as its argument.
-> as useEffect is used to make a api call in functional component , componentDidMount is used to make api call in CBC.
because it will work when it ensures that CBC has loaded .
