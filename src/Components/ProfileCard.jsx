import React from 'react'

export default function ProfileCard() {
  return (
    <div className=" rounded-xl p-8 md:p-0 bg-orange-300 px-32 mx-32">
          <img className="w-24 h-24 md:w-48 md:h-auto  rounded-full mx-auto" src="https://img.freepik.com/premium-psd/3d-cartoon-man-smiling-portrait-isolated-transparent-background-png-psd_888962-1570.jpg" alt="" width="384" height="512"/>

    
 <div className="flex rounded-xl p-8 md:p-0 bg-orange-300 px-32 mx-32">
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Ben Aroh
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
    <button class=" bg-slate-50 w-6/12 h-20 text-slate-500 font-bold py-2 px-4 rounded-full">
  Class Subscribe
</button>
<button class=" bg-slate-50 w-6/12 h-20 text-slate-500 font-bold py-2 px-4 rounded-full">
  Studio info
</button>
<button class=" bg-slate-50 w-6/12 h-20 text-slate-500 font-bold py-2 px-4 rounded-full">
  Up coming Events
</button>
<button class=" bg-slate-50 w-6/12 h-20 text-slate-500 font-bold py-2 px-4 rounded-full">
About
</button>
<div>

<span class="[&>svg]:h-5 [&>svg]:w-5">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 320 512">
    <path
      d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
  </svg>
</span>








</div>


  </div>
  
</div>
</div>

  )
}
