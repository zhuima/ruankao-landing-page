import { cn } from '../lib/utils'

interface CalloutProps {
  icon?: string
  children?: React.ReactNode
  type?: 'default' | 'warning' | 'danger' | 'success' | 'info'
}

export function Callout({
  children,
  icon,
  type = 'default',
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn(
        'flex w-full rounded-lg border-l-[6px] bg-opacity-[15%] px-3 py-8 shadow-md md:p-9',
        {
          'border-[#F87171] bg-[#f871715b]': type === 'danger',
          'border-l-[#F0A92D] bg-[#ddb26952]': type === 'warning',
          'border-[#009400] bg-[#e6f6e6]': type === 'success',
          'border-l-[#007BC3] bg-[#7cc3ec67]': type === 'info',
        }
      )}
      {...props}
    >
      <span className="pr-3">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="10"
            cy="10"
            r="10"
            fill={cn({
              '#F87171': type === 'danger',
              '#F0A92D': type === 'warning',
              '#009400': type === 'success',
              '#007BC3': type === 'info',
            })}
          ></circle>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.1203 6.78954C14.3865 7.05581 14.3865 7.48751 14.1203 7.75378L9.12026 12.7538C8.85399 13.02 8.42229 13.02 8.15602 12.7538L5.88329 10.4811C5.61703 10.2148 5.61703 9.78308 5.88329 9.51682C6.14956 9.25055 6.58126 9.25055 6.84753 9.51682L8.63814 11.3074L13.156 6.78954C13.4223 6.52328 13.854 6.52328 14.1203 6.78954Z"
            fill="white"
          ></path>
        </svg>
      </span>

      <div className="w-full">
        <h5
          className={cn('mb-3 text-base font-semibold', {
            'text-[#F87171]': type === 'danger',
            'text-[#F0A92D]': type === 'warning',
            'text-[#009400]': type === 'success',
            'text-[#007BC3]': type === 'info',
          })}
        >
          TIP
        </h5>
        <div>{children}</div>
      </div>
    </div>
  )
}
