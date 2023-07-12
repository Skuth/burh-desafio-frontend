import { Form } from "../../components/Form"
import { Header } from "../../components/Header"
import { VacanciesList } from "../../components/VacanciesList"

export const Home = () => {
    return(
        <>
            <Header />
            <Form />
            <VacanciesList />
        </>
    )
}