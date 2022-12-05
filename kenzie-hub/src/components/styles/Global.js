import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    --color-white: #FFFFFF;
    

    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;


    --negative: #E83F5B;
    --warning: #FFCD07;
    --sucess: #3FE864;
    --information: #155BCB;

    



}
body{
    background-color: #121214;
}

*{
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    
}


`;
