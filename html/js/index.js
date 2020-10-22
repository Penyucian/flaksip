function splash() {

    const content = document.querySelector("#content");
    content.innerHTML = `
    <div class="h-screen w-full flex flex-col items-center justify-center">
        <img class="h-16" src="./img/logo.svg" alt="logo">
    </div>
    `

}

splash()

setTimeout(() => signIn(), 3000);

//main()
function signIn() {
    const content = document.querySelector("#content");
    content.innerHTML = `
        <div class="h-screen w-screen flex flex-col" id="signUp">
            <nav class="flex justify-between items-center flex-shrink-0 p-4">
                <div class="p-1 bg-gray-700 rounded-full">
                    <img src="./img/logo.svg" alt="logo">
                </div>
                <div>
                    <p class="text-white">doesn't have an account? <a href="#" class="text-orange-500 font-bold" onclick="signUp()">Sign Up</a></p>
                </div>
            </nav>
            <div class="flex justify-center items-center h-full">
                <div class="p-6 bg-gray-700 rounded-lg w-full overflow-hidden sm:w-full md:w-2/4 lg:w-1/3 xl:w-1/4 mx-4">
                    <h5 class="text-white font-bold text-2xl mt-4 mb-8">
                        Login
                    </h5>
                    <form>
                        <div class="mb-6 flex flex-col" id="emailCol">
                            <label class="text-white mb-2 font-bold" for="email" id="email">email</label>
                            <input class="py-2 px-3 rounded border bg-gray-800 border-gray-900 text-gray-500 focus:text-white" type="email" id="email" placeholder="email">
                        </div>
                        <div class="mb-4 flex flex-col" id="passwordCol">
                            <label class="text-white mb-2 font-bold" for="password">
                                password
                            </label>
                            <input class="py-2 px-3 rounded border bg-gray-800 border-gray-900 text-gray-500 focus:text-white" type="password" id="password" placeholder="password">
                        </div>
                        <div class="mb-10">
                            <a class="inline-block text-xs text-orange-400 hover:text-orange-500" href="#">
                                Forgot Password?
                            </a>
                        </div>
                        <div class="flex items-center">
                            <button class="w-full bg-orange-500 text-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" id="signInbut">
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        `

        const signInBut = document.querySelector("#signInbut")
    signInBut.addEventListener("click", ()=>{
    
    const email = document.querySelector("#email")
    const emailCol = document.querySelector("#emailCol")
    const password = document.querySelector("#password")
    const passwordCol = document.querySelector("#passwordCol")

    if (email.value === "") {
        emailCol.innerHTML = `
            <div class="flex flex-row items-center text-red-500 mb-2 font-bold"><label for="email">email</label><p class="text-xs ml-1"> - can't empty</p></div>
            <input class="py-2 px-3 rounded bg-gray-800 border border-red-500 text-gray-500 focus:text-white" type="email" id="email" placeholder="email">
        
        `
    }
    if (password.value === "") {
        passwordCol.innerHTML = `
            <div class="flex flex-row items-center text-red-500 mb-2 font-bold"><label for="password">password</label><p class="text-xs ml-1"> - can't empty</p></div>
            <input class="py-2 px-3 rounded bg-gray-800 border border-red-500 text-gray-500 focus:text-white" type="password" id="password" placeholder="password">
        
        `
    }
})

}

function signInVal() {

    
    
}


function signUp() {

    const content = document.querySelector("#content");

    content.innerHTML = `
        <div class="h-screen w-screen flex flex-col" id="signIn">
            <nav class="flex justify-between items-center flex-shrink-0 p-4">
                <div class="p-1 bg-gray-700 rounded-full">
                    <img src="./img/logo.svg" alt="logo">
                </div>
                <div>
                    <p class="text-white">Have an account? <a href="#" class="text-orange-500 font-bold" onclick="signIn()">Sign In</a></p>
                </div>
            </nav>
            <div class="flex justify-center items-center h-full">
                <div class="p-6 bg-gray-700 rounded-lg w-full overflow-hidden sm:w-full md:w-2/4 lg:w-1/3 xl:w-1/4 mx-4">
                    <div class="flex flex-row justify-between items-center">
                        <h5 class="text-white font-bold text-2xl mt-4 mb-8">Sign Up</h5>
                        <div class="flex flex-row items-center">
                            <h5 class="text-white font-bold text-2xl mt-4 mb-8" id="signUpStep">1</h5>
                            <h6 class="text-white text-1xl mt-4 mb-8"> /2</h6>
                        </div>
                    </div>
                    <form id="form">
                        <div class="mb-6 flex flex-row w-full" id="signUpStep2">
                            <div class="flex flex-col w-1/2 pr-3" id="firstNameCol">
                                <label class="text-white mb-2 font-bold" for="firstName">first name</label>
                                <input class="py-2 px-3 rounded bg-gray-800 border border-gray-900 text-gray-500 focus:text-white" type="text" id="firstName" placeholder="first name">
                            </div>
                            <div class="flex flex-col w-1/2 pl-3" id="lastNameCol">
                                <label class="text-white mb-2 font-bold" for="lastName">last name</label>
                                <input class="py-2 px-3 rounded bg-gray-800 border border-gray-900 text-gray-500 focus:text-white" type="text" id="lastName" placeholder="last name">
                            </div>
                        </div>
                        <div class="mb-4 flex flex-col" id="userNameCol">
                            <label class="text-white mb-2 font-bold" for="username">username</label>
                            <input class="py-2 px-3 rounded bg-gray-800 border border-gray-900 text-gray-500 focus:text-white" type="text" id="userName" placeholder="username">
                        </div>
                        <div class="mb-10 flex flex-col" id="emailCol">
                            <label class="text-white mb-2 font-bold" for="email">email</label>
                            <input class="py-2 px-3 rounded bg-gray-800 border border-gray-900 text-gray-500 focus:text-white" type="email" id="email" placeholder="email">
                        </div>
                        <div class="flex items-center">
                            <button class="w-full bg-orange-500 text-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" id="toStep2">
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `

    const firstName = document.querySelector("#firstName")
    const lastName = document.querySelector("#lastName")
    const userName = document.querySelector("#userName")
    const email = document.querySelector("#email")
    const form = document.querySelector("#form")
    const signUpStep = document.querySelector("#signUpStep")
    const toStep2 = document.querySelector("#toStep2")

    const firstNameCol = document.querySelector("#firstNameCol")
    const lastNameCol = document.querySelector("#lastNameCol")
    const userNameCol = document.querySelector("#userNameCol")
    const emailCol = document.querySelector("#emailCol")

    toStep2.addEventListener("click", () => {

        if (firstName.value === "" || firstName.value === undefined) {
            firstNameCol.innerHTML = `
            <div class="flex flex-row items-center text-red-500 mb-2 font-bold"><label for="firstName">first name</label><p class="text-xs ml-1"> - can't empty</p></div>
            <input class="py-2 px-3 rounded bg-gray-800 border border-red-500 text-gray-500 focus:text-white" type="text" id="firstName" placeholder="first name">
            `
        }
        if (lastName.value === "" || lastName.value === undefined){
            lastNameCol.innerHTML = `
                <div class="flex flex-row items-center text-red-500 mb-2 font-bold"><label for="lastName">last name</label><p class="text-xs ml-1"> - can't empty</p></div>
                <input class="py-2 px-3 rounded bg-gray-800 border border-red-500 text-gray-500 focus:text-white" type="text" id="lastName" placeholder="last name">
            `
        }
        if (userName.value === "" || userName.value === undefined) {
            userNameCol.innerHTML = `
            <div class="flex flex-row items-center text-red-500 mb-2 font-bold"><label for="userName">username</label><p class="text-xs ml-1"> - can't empty</p></div>
            <input class="py-2 px-3 rounded bg-gray-800 border border-red-500 text-gray-500 focus:text-white" type="text" id="userName" placeholder="username">
            `
        }
        if (email.value === "" || email.value === undefined){
            emailCol.innerHTML = `
                <div class="flex flex-row items-center text-red-500 mb-2 font-bold"><label for="email">email</label><p class="text-xs ml-1"> - can't empty</p></div>
                <input class="py-2 px-3 rounded bg-gray-800 border border-red-500 text-gray-500 focus:text-white" type="text" id="email" placeholder="email">
            `
        }

        if (firstName.value != '') {
            signUpStep.innerHTML = `2`
            form.innerHTML = `
                <div class="mb-4 flex flex-col" id="password">
                    <label class="text-white mb-2 font-bold" for="password">password</label>
                    <input class="py-2 px-3 rounded bg-gray-800 border border-gray-900 text-gray-500 focus:text-white" type="password" id="paswword" placeholder="password">
                </div>
                <div class="mb-4 flex flex-col" id="emailCol">
                    <label class="text-white mb-2 font-bold" for="confirmPassword">email</label>
                    <input class="py-2 px-3 rounded bg-gray-800 border border-gray-900 text-gray-500 focus:text-white" type="password" id="confirmPassword" placeholder="comfirm password">
                </div>
                <div class="mb-10">
                    <p class="text-white text-xs text-center">
                        Click “Sign Up” to agree to Flaksip’s Terms of Service<br/>
                        and acknowledge that Flaksip’s Privacy Policy <br/>
                        applies to you.
                    </p>
                </div>
                <div class="flex items-center">
                    <button class="w-full bg-orange-500 text-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" id="toDone">
                        Sign In
                    </button>
                </div>
            `
        }

    })

}