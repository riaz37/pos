import Link from 'next/link'

import { usePathname } from 'next/navigation'
import { SidebarMenuButton, SidebarMenuItem } from './atoms/sidebar'

const SidebarItems: React.FC<IDrawerProps> = ({ item }) => {
  const linkPath = `/dashboard/${item.path}`
  const pathName = usePathname()
  const isActive = pathName === linkPath
  return (
    <SidebarMenuItem className="bg-white  rounded-md">
      <SidebarMenuButton
        asChild
        className={`${pathName === linkPath ? 'bg-primary text-white hover:bg-primary hover:text-white' : ''} my-1`}
      >
        <Link href={linkPath}>
          <div className="size-[2rem]  flex items-center justify-center">
            {item.icon ? <item.icon fill={isActive ? 'white' : ''} /> : null}
          </div>

          <span>{item.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

export default SidebarItems
