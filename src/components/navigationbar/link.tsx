import { SelectedPage } from "../pages/types";

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

function Link({ page, selectedPage, setSelectedPage, }: Props) {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <a className={`${selectedPage === lowerCasePage ? "text-font-color-2" : "text-font-color"}
     transition duration-500 hover:text-font-color-3
    `}
     href={`/${"reactts/"+lowerCasePage}`} onClick={() => setSelectedPage(lowerCasePage)}>
        {page}
    </a>
  )
}

export default Link