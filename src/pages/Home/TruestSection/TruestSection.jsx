import TruestSectionCaption from './TruestSectionCaption'
import TruestSectionImage from './TruestSectionImage'

export default function TruestSection() {
  return (
    <section className='container flex flex-wrap items-center sm:flex-nowrap gap-5'>
      <TruestSectionImage/>
      <TruestSectionCaption/>
    </section>
  )
}
