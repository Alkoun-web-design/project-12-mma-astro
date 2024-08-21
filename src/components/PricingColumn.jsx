export default function PricingColumn() {
    return (
        <div class="flex flex-col rounded-lg border p-4 pt-6">
          <div class="mb-12">
            <div class="mb-2 text-center text-2xl font-bold text-gray-800">Free</div>
  
            <p class="mx-auto mb-8 px-8 text-center text-gray-500">For individuals and organizations who want to try our system</p>
  
            <div class="space-y-2">
               {/* check - start  */}
              <div class="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
  
                <span class="text-gray-600">1.000 MB file storage</span>
              </div>
               {/* check - end  */}
  
               {/* check - start  */}
              <div class="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
  
                <span class="text-gray-600">2.000 MB bandwidth per month</span>
              </div>
              {/* check - end  */}
  
              {/* check - start */}
              <div class="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
  
                <span class="text-gray-600">200 tasks per month</span>
              </div>
               {/* check - end  */}
  
               {/* check - start  */}
              <div class="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
  
                <span class="text-gray-600">Comunity support</span>
              </div>
              {/* check - end  */}
            </div>
          </div>
  
          <div class="mt-auto flex flex-col gap-8">
            <div class="flex items-end justify-center gap-1">
              <span class="self-start text-gray-600">$</span>
              <span class="text-4xl font-bold text-gray-800">0</span>
              <span class="text-gray-500">per user/month</span>
            </div>
  
            <a href="#" class="block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Join for free</a>
          </div>
        </div>
    )
}