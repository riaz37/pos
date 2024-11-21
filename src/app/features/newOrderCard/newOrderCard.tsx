import TkIcon from '@/assets/icons/TkIcon'
import ReuseIcon from '../../../components/common/reuseIcon/reuseIcon'
import PlusIcon from '@/assets/icons/PlusIcon'

const NewOrderCard: React.FC<NewOrder> = ({
  dishName = 'Burger',
  amount = 100,
}) => {
  return (
    <div className="min-w-[250px] border p-4 flex flex-col gap-11 rounded-xl bg-white">
      <div className="text-[24px] leading-9 font-semibold">{dishName}</div>
      <div className="flex justify-between h-[26px]">
        <div className="flex gap-2 justify-center items-center">
          <ReuseIcon icon={<TkIcon />} />
          <span className="text-xl leading-[26px] font-bold text-primary">
            {amount}
          </span>
        </div>
        <ReuseIcon icon={<PlusIcon />} />
      </div>
    </div>
  )
}

export default NewOrderCard
