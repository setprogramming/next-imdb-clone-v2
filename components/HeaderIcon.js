

export default function HeaderIcon({Icon, title}) {
  return (
    <div className="mx-4 flex flex-col hover:text-white active:text-red-500 cursor-pointer lg:mx-6">
        <Icon className="h-6" />
        <p className="my-1">{title}</p>
    </div>
  )
}
