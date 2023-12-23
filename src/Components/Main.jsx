import { FirstSection } from "./MainPage/FirstSection";
import { SecondSection } from "./MainPage/SecondSection";
import { ThirdSection } from "./MainPage/ThirdSection";

export const MainContent = () => {

    return (
        <>
            <main className="lg:mt-[17rem] mt-[13rem] relative">
                <div className=' relative top-[-75px] w-[90%] lg:max-w-2xl mx-auto '>
                    <FirstSection />
                    <SecondSection />
                    <ThirdSection />
                </div>
            </main>
        </>
    )
}

