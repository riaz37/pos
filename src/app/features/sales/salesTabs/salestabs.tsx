import TkIcon from '@/assets/icons/TkIcon'
import GrowIcon from '@/assets/icons/salesIcon/GrowIcon'
import ReuseIcon from '@/components/common/reuseIcon/reuseIcon'
import { SaleInfo } from '@/types/common'

const Salestabs: React.FC<SaleInfo> = ({ logo, title, amount }) => {
  return (
    <div className="max-w-[377px] border p-4 flex flex-col gap-11 rounded-lg bg-white">
      <div className="flex items-center gap-5">
        <div>{logo ? logo : ''}</div>
        <div className="text-[20px] leading-7 font-medium">{title}</div>
      </div>

      <div className="flex items-center justify-between text-[14px] leading-[22px] font-medium text-primary h-[64px] gap-2">
        <div className="flex items-center gap-2">
          <GrowIcon />
          <div className="border-r-4 pr-4 border-[#D9D9D9]">
            +2.25% from last weekly
          </div>
        </div>

        <div className="flex gap-1 items-center h-[64px]">
          <ReuseIcon icon={<TkIcon />} />
          <span className="text-xl font-bold text-primary">{amount}</span>
        </div>
      </div>
    </div>
  )
}

export default Salestabs
