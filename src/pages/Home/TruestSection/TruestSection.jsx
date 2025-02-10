import TruestSectionCaption from './TruestSectionCaption'
import TruestSectionImage from './TruestSectionImage'

export default function TruestSection() {
  return (
    <section className='container grid grid-cols-1 sm:grid-cols-2 items-center gap-5'>
      <TruestSectionCaption/>
      <TruestSectionImage/>
    </section>
  )
}
