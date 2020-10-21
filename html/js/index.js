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
                        <div class="mb-6 flex flex-col">
                            <label class="text-white mb-2 font-bold" for="email">email</label>
                            <input class="py-2 px-3 rounded border bg-gray-800 border-gray-900 text-gray-500 focus:text-white" type="email" id="email" placeholder="email">
                        </div>
                        <div class="mb-4 flex flex-col">
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
                            <button class="w-full bg-orange-500 text-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        `
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
                            <h5 class="text-white font-bold text-2xl mt-4 mb-8" id="sinUpStep">1</h5>
                            <h6 class="text-white text-1xl mt-4 mb-8"> /2</h6>
                        </div>
                    </div>
                    <form>
                        <div class="mb-6 flex flex-row w-full" id="signUpStep2">
                            <div class="flex flex-col w-1/2 pr-3">
                                <label class="text-white mb-2 font-bold" for="firstName">first name</label>
                                <input class="py-2 px-3 rounded bg-gray-800 border border-gray-900 text-gray-500 focus:text-white" type="text" id="firstName" placeholder="first name">
                            </div>
                            <div class="flex flex-col w-1/2 pl-3">
                                <label class="text-white mb-2 font-bold" for="lastName">last name</label>
                                <input class="py-2 px-3 rounded bg-gray-800 border border-gray-900 text-gray-500 focus:text-white" type="text" id="lastName" placeholder="last name">
                            </div>
                        </div>
                        <div class="mb-4 flex flex-col">
                            <label class="text-white mb-2 font-bold" for="username">username</label>
                            <input class="py-2 px-3 rounded bg-gray-800 border border-gray-900 text-gray-500 focus:text-white" type="text" id="username" placeholder="username">
                        </div>
                        <div class="mb-10 flex flex-col">
                            <label class="text-white mb-2 font-bold" for="email">email</label>
                            <input class="py-2 px-3 rounded bg-gray-800 border border-gray-900 text-gray-500 focus:text-white" type="enail" id="email" placeholder="email">
                        </div>
                        <div class="flex items-center">
                            <button class="w-full bg-orange-500 text-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `


}