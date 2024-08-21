
// import { createSignal } from 'solid-js';
// import { useLocation } from 'solid-app-router';
import DropdownNavLink from './DropdownNavLink';
import HeaderNavLink from "./HeaderNavLink.jsx";

export default function Navigation () {
    
    // const [isActive, setIsActive] = createSignal(true);

    
    // const location = useLocation();
    // const currentURL = window.location.pathname;
    // console.log(currentURL);

    const pages = ['/', '/discover_mma', '/subject_tutors', '/home_schooling', '/specialized_testing', '/notes', '/books', '/past_papers', '/specialized_testing', '/career_counseling', '/life_coaching', '/mental_health_counseling', '/our_staff', '/faqs', '/pricing', '/get_in_touch'];

    // const handleNavClick = (e) => {
    //   for (let page of pages) {
    //     if (page === currentURL)  {
    //       console.log('its working');
    //     }
    //   }  
    // };

    // console.log(isActive);

    return (
        <>
        {/* <a class="btn btn-ghost text-xl" href="/">Mind Muscles Aacademy</a> */}
          <HeaderNavLink href="/" name="Home"/>
          {/* <DropdownNavLink name="Our Services">
            <HeaderNavLink href="/subject_tutors" name="Subject Tutors"/>
            <HeaderNavLink href="/home_schooling" name="Home Schooling"/>
            <HeaderNavLink href="/specialized_testing" name="Specialized Testing"/>
          </DropdownNavLink> */}
          {/* <DropdownNavLink name="Our Resources">
            <HeaderNavLink href="/notes" name="Notes"/>
            <HeaderNavLink href="/books" name="Books"/>
            <HeaderNavLink href="/past_papers" name="Past Papers"/>
            <HeaderNavLink href="/example_candidate_responses" name="Example Candidate Responses"/>
          </DropdownNavLink> */}
          <HeaderNavLink href="/services" name="Services" />
          <DropdownNavLink name="Counseling">
            <HeaderNavLink href="/student_counseling" name="Student Counseling"/>
            <HeaderNavLink href="/life_coaching" name="Life Coaching"/>
            <HeaderNavLink href="/mental_health_counseling" name="Mental Health Counseling"/>
          </DropdownNavLink>       
          <HeaderNavLink href="/resources" name="Resources"/>
          <HeaderNavLink href="/our_staff" name="Our Staff"/>
          <HeaderNavLink href="/faqs" name="FAQs"/>
          <HeaderNavLink href="/pricing" name="Pricing"/>
          <HeaderNavLink href="/get_in_touch" name="Get in touch"/>
          <HeaderNavLink href="/discover_mma" name="Discover MMA"/>
        </>
    )
}