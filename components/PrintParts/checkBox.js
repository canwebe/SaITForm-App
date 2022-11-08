import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from 'react-icons/md'
import s from '../../styles/Check.module.css'

export default function CheckBox({ checked, data }) {
  return (
    <div className={s.checkBox}>
      {data.map((item, i) => (
        <div className={s.checkItem} key={i}>
          {item.value === checked ? (
            <MdOutlineCheckBox />
          ) : (
            <MdOutlineCheckBoxOutlineBlank />
          )}{' '}
          {item.name}
        </div>
      ))}
    </div>
  )
}
