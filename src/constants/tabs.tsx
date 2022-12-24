import { EuiTabbedContentProps } from "@elastic/eui"
import Fiz from "../components/Fiz"
import Yur from "../components/Yur"

const tabs: EuiTabbedContentProps['tabs'] = [
    {
      id: 'yur',
      name: 'Юридические лица',
      content: <Yur />
    },
    {
        id: 'fiz',
        name: 'Физические лица',
        content: <Fiz />
    }
  ]


  export default tabs
