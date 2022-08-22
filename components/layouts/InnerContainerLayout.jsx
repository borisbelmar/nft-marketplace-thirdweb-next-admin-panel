import clsx from "clsx"

export default function InnerContainerLayout ({ children, className }) {
  return (
    <div className={clsx(
      'max-w-[1024px] w-full mx-auto px-4',
      className
    )}>
      {children}
    </div>
  )
}