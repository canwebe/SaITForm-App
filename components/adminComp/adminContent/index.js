import s from './adminContent.module.css'

export default function AdminContent({ data }) {
  console.log(data)
  return (
    <div className={s.adminContent}>
      This is admin Content
      <div className={s.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        praesentium recusandae sunt architecto eaque aliquam repellendus velit,
        provident exercitationem incidunt ullam illum laborum, numquam inventore
        corporis deserunt perspiciatis animi explicabo.
      </div>
    </div>
  )
}
