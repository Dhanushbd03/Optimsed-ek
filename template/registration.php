<section class="ek-fixed ek-right-0 ek-top-0 ek-flex ek-h-screen ek-w-full ek-flex-col ek-items-center ek-justify-center ek-bg-white sm:ek-w-2/3 lg:ek-w-2/6 ek-z-[70]" id="loginSection">
    <button class="ek-absolute ek-right-10 ek-top-10 ek-rounded-full ek-px-1 ek-text-primary hover:ek-text-secondary" id="login-close">
        <i class="fa-solid fa-x"></i>
    </button>
    <!-- login  -->

    <form class="ek-flex ek-w-full ek-flex-col ek-items-center ek-justify-center ek-gap-2 ek-p-5 z-[70]" id="loginform">
        <h1 class="ek-mb-2 ek-text-4xl ek-text-gray-600">Welcome Back!</h1>
        <h3 class="ek-mb-10 ek-text-2xl ek-text-gray-600">
            Login to your Account
        </h3>
        <div class="ek-flex ek-w-full ek-flex-col ek-gap-5">
            <div class="ek-flex ek-items-center ek-rounded-lg ek-border-2" id="login-emaildiv">
                <i class="fa-solid fa-user ek-px-5"></i>
                <input type="email" class="ek-w-full ek-rounded-md ek-px-3 ek-py-2 ek-outline-none" placeholder="Email" />
            </div>
            <div class="ek-flex ek-items-center ek-rounded-lg ek-border-2" id="login-passworddiv">
                <i class="fa-solid fa-lock ek-px-5"></i>
                <input type="password" class="ek-w-full ek-rounded-md ek-px-3 ek-py-2 focus:ek-outline-none" placeholder="Password" />
            </div>
        </div>
        <a href="#" class="ek-mt-2 ek-text-sm ek-text-gray-600">Forgot password?</a>
        <button type="submit" class="ek-mt-4 ek-w-full ek-rounded-md ek-bg-primary ek-py-3 ek-text-white ek-transition ek-duration-300 hover:ek-bg-secondary">
            Login
        </button>
        <p class="ek-mt-4 ek-text-gray-400">
            Do not have an account?
            <button id="showsignup" class="ek-text-primary hover:ek-text-secondary">
                Signup
            </button>
        </p>
    </form>

    <!-- login end  --><!-- signup  -->
    <form class="ek-hidden ek-w-full ek-flex-col ek-items-center ek-justify-center ek-gap-2 ek-p-5" id="signupform">
        <h1 class="ek-mb-2 ek-text-center ek-text-4xl ek-text-gray-600">
            Welcome to electronickart.com
        </h1>
        <h3 class="ek-mb-10 ek-text-2xl ek-text-gray-600">
            Signup to create your Account
        </h3>
        <div class="ek-flex ek-w-full ek-flex-col ek-gap-5">
            <div class="ek-flex ek-items-center ek-rounded-lg ek-border-2" id="login-emaildiv">
                <i class="fa-solid fa-user ek-px-5"></i>
                <input type="email" class="ek-w-full ek-rounded-md ek-px-3 ek-py-2 ek-outline-none" placeholder="Email" />
            </div>
            <div class="ek-flex ek-items-center ek-rounded-lg ek-border-2" id="login-passworddiv">
                <i class="fa-solid fa-lock ek-px-5"></i>
                <input type="password" class="ek-w-full ek-rounded-md ek-px-3 ek-py-2 focus:ek-outline-none" placeholder="Password" />
            </div>
        </div>

        <button type="submit" class="ek-mt-4 ek-w-full ek-rounded-md ek-bg-primary ek-py-3 ek-text-white ek-transition ek-duration-300 hover:ek-bg-secondary">
            Signup
        </button>
        <p class="ek-mt-4 ek-text-gray-400">
            Already have an account?
            <button id="showlogin" class="ek-text-primary hover:ek-text-secondary">
                login
            </button>
        </p>
    </form>
    <!-- signup end  -->
</section>