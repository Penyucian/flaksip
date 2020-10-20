function splash() {

    const content = document.querySelector("#content");
    content.innerHTML = `
    <div class="h-screen w-full flex flex-col items-center justify-center">
        <img class="h-16" src="./img/logo.svg" alt="logo">
    </div>
    `

}

//splash()

// setTimeout(() => main(), 3000);
main()
function main() {
    const content = document.querySelector("#content");
    content.innerHTML = `
    
        
        <div class="h-screen w-screen flex flex-col">
            <nav class="flex justify-between items-center flex-shrink-0 p-4">
                <div class="p-1 bg-gray-700 rounded-full">
                    <img src="./img/logo.svg" alt="logo">
                </div>
                <div>
                    <p class="text-white">doesn't have an account? <a href="#" class="text-orange-500 font-bold">Sign Up</a></p>
                </div>
            </nav>
            <div class="flex justify-center items-center h-full">
                <div class="p-6 bg-gray-700 rounded-lg w-full overflow-hidden sm:w-full md:w-2/4 lg:w-1/3 xl:w-1/4 mx-4">
                    <h5 class="text-white font-bold text-2xl mt-4 mb-8">
                        Login
                    </h5>
                    <form>
                        <div class="mb-6 flex flex-col">
                            <label class="text-white mb-2 font-bold" for="email">
                                email
                            </label>
                            <input class="py-2 px-3 rounded" type="email" id="email" placeholder="email">
                        </div>
                        <div class="mb-4 flex flex-col">
                            <label class="text-white mb-2 font-bold" for="password">
                                password
                            </label>
                            <input class="py-2 px-3 rounded" type="password" id="password" placeholder="password">
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