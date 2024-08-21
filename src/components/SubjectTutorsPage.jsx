import Section from "../components/Section"
import PageHeading from "../components/PageHeading"
import H2 from "../components/H2"
import H2SubHeading from "../components/H2SubHeading"
import TutorSearch from '../components/TutorSearch';

export default function SubjectTutorsPage() {
    return (
        <Section>
            <div class="mx-auto max-w-screen-xl px-4 md:px-8">
              <PageHeading>
                <H2 heading="Tutoring"/>
                <H2SubHeading subheading="This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated."/>
              </PageHeading>

              <TutorSearch/>
            </div>
        </Section>
    )
}