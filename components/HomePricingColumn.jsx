export default function HomePricingColumn(props) {
    return (
        <div class="flex flex-col m-auto rounded-lg border p-4 pt-6">
          <div class="mb-12">
            <div class="mb-2 text-center text-2xl font-bold text-gray-800">{props.plan}</div>
          </div>
  
          <div class="mt-auto flex flex-col gap-8">
            <div class="flex items-end justify-center gap-1">
              <span class="self-start text-gray-600">{props.currency}</span>
              <span class="text-2xl font-bold text-gray-800">{props.price}</span>
              <span class="text-gray-500">per user/month</span>
            </div>
          </div>
        </div>
    )
}