import { Header } from "./header";
import { Features } from "./features";
import { About } from "./about";
import { Services } from "./services";
import { Gallery } from "./gallery";
import { Contact } from "./contact";

const Main = ({data}) => {
  return (
    <>
      <Header data={data.Header} />
      <Features data={data.Features} />
      <About data={data.About} />
      <Services data={data.Services} />
      <Gallery data={data.Gallery} />
      <Contact data={data.Contact} />
    </>
  );
};

export default Main;
