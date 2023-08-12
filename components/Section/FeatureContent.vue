<template>
<section class="p-[100px]">
    <div class="">
        <div class="text-center">
            <h2 class="font-bold text-[30px]">Feature Content</h2>
            <small>Our Collection</small>
        </div>
        <div class="mt-4">
            <div class="grid grid-rows-1">
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-6">
                        <div class="cursor-pointer h-[100%] w-[100%]">
                            <div 
                                style="background-image: url(https://voxo.vercel.app/images/fashion/banner/4.jpg)" 
                                class="p-8 rounded-t-lg rounded-lg relative bg-cover h-[100%] flex justify-center w-[100%]"
                            >
                                <div class="flex absolute justify-end items-center top-0 w-[100%] h-[100%]">
                                    <div class="p-[50px] w-[60%] text-right cursor-pointer">
                                        <span class="block -m-[4px] text-right">
                                            New <span class="text-[#e22454]">Collection</span>
                                        </span>
                                        <h2 class="text-[#212529] text-feature-content leading-[1.32] block">
                                            New Red Jacket From 
                                            <span class="text-[#e22454] -m-[2px inline-block] text-feature-content">
                                                $48
                                            </span>
                                        </h2>
                                        <button class="
                                                text-btn bg-unset border-[1px] 
                                                border-solid border-[#e22454] 
                                                bg-[#e22454] overflow-hidden btn 
                                                text-white
                                            "
                                        >
                                            Shop Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-6">
                        <div class="grid grid-rows-2 gap-4">
                            <div class="grid grid-cols-12 border">
                                <div class="col-span-12">
                                    <div class="cursor-pointer h-[225px] w-[100%]">
                                        
                                        
                                        <div
                                            style="background-image: url(https://voxo.vercel.app/images/fashion/banner/5.jpg)" 
                                            class="p-8 rounded-t-lg rounded-lg relative bg-cover h-[100%] flex justify-center w-[100%]"
                                        >
                                            <div class="flex absolute justify-start items-center top-0 w-[100%] h-[100%]">
                                                <div class="p-[50px] w-[60%] text-left cursor-pointer">
                                                    <h2 class="text-[#212529] text-[25px] leading-[1.32] block">
                                                        New Hoodie From 
                                                        <span class="text-[#e22454] -m-[2px inline-block] text-[25px]">
                                                            $48
                                                        </span>
                                                    </h2>
                                                    <button class="
                                                            text-btn bg-unset border-[1px] 
                                                            border-solid border-[#e22454] 
                                                            bg-[#e22454] overflow-hidden btn 
                                                            text-white mt-4
                                                        "
                                                    >
                                                        Shop Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-12 border gap-4">
                                <div class="col-span-6 border">
                                    <div 
                                        class="cursor-pointer h-[225px] w-[100%] bg-no-repeat bg-cover relative" 
                                        style="background-image: url(https://voxo.vercel.app/images/fashion/banner/6.jpg)"
                                    >
                                        <div class="flex justify-center items-end">
                                            <div class="py-[40px] px-[60px] absolute top-16 text-[#fff] bg-[#232323ed] transition-colors duration-500 ease-in-out hover:bg-[#e22454]">
                                                <h3 class="mb-1 font-bold">New Jacket</h3>
                                                <small class="text-white font-bold">
                                                    Discount 70%
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-6 border">
                                    <div 
                                        class="cursor-pointer h-[225px] w-[100%] bg-no-repeat bg-cover relative" 
                                        style="background-image: url(https://voxo.vercel.app/images/fashion/banner/7.jpg)"
                                    >
                                        <div class="flex justify-center items-end">
                                            <div class="py-[40px] px-[60px] absolute top-16 bg-[#232323ed] text-[#fff] transition-colors duration-500 ease-in-out hover:bg-[#e22454]">
                                                <h3 class="mb-1 font-bold">New Jacket</h3>
                                                <small class="text-white font-bold">
                                                    Discount 70%
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {

}
</script>

<style>
.text-feature-content {
    font-size: calc(12.4px + 1.75vw);
    margin: calc(-1.6px + 1.125vw) 0;
}
.text-btn {
    font-size: calc(12.8px + .0625vw);
}

.btn {
    border-radius: 0;
    font-size: calc(11.8px + .0625vw);
    font-weight: 500;
    padding: calc(6.8px + 0.375vw) calc(12px + 0.9375vw);
    position: relative;
    text-transform: capitalize;
    transition: all .5s;
    white-space: nowrap;
    z-index: 1;
}
</style>