import AboutDescription from "../About/AboutDescription"
import Pages from "../Pages"
import BreadcrumbsForm from "./BreadcrumbsForm"
import CarouselForm from "./CarouselForm"
import Categories from "./Categories"
import Guarantees from "./Guarantees"
import Products from "./Products"
import Search from "./Search"



const HomePage = () => {
  return(
    <>
    <CarouselForm />
      <BreadcrumbsForm />
      <Categories />
      {/* <Search /> */}
      <Products />
      <Pages />
      <AboutDescription />
      <Guarantees />
      
    </>
  )
}

export default HomePage