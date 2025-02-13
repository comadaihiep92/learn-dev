import { Avatar, Button } from "antd"
import {AreaChartOutlined, PlusCircleOutlined, ExclamationCircleOutlined, BellOutlined } from "@ant-design/icons"
import Search from "antd/es/input/Search"
import "../css/Headertrello.scss"

function HeaderTrello() {
    return(
        <div className="header">
            <div>
                <div className="logo">
                    <h2>Trello</h2>
                </div>
                <hr />
                <div className="boards">
                    <Button type="none" size="large" icon={<AreaChartOutlined />}>Boards</Button>
                </div>
                <hr />
                <div className="search">
                    <Search placeholder="input search text" style={{ width: 200 }} />
                </div>
            </div>
            <div className="info-user">
                <Button type="none" shape="circle" icon={<PlusCircleOutlined />} size="large"/>
                <Button type="none" shape="circle" icon={<ExclamationCircleOutlined />} size="large"/>
                <Button type="none" shape="circle" icon={<BellOutlined />} size="large"/>
                <Avatar src="https://s3-alpha-sig.figma.com/img/6a2f/6101/d55a10b5d92ee5b69adc845bde146c0a?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SSP2xrxda7el8B7TJuW5ltXtIsWMNAwgAoLR5fCOPRX1cMWVHEPI5mzvBAWsCajlNbPODKLTGAZM2M7RVCsH6qSSTiv~-nP9aAitAgf2RlgZ2ftIMo1W9Es7vgy1C5VLv7MvO4F9cpgBxP4oAz6lvDhcujGt4UrKN2XLqzC4RkAfzQCzIstPz1m-N8k8JtZBcfV8h2ONZNdC~4qTevpmpPoJBk3DhtA79H9oHeZ9sd-3g0l~DNPPy5BKldwI92IcEZ0mQniRR32SphAjDmMZcrqpE3rgmTnDP2whzZ2XBVuNDfPkeLiF-3JRbsvC7HzRgYNGJH22q7epW0qX2P-9nw__"/>
            </div>
        </div>
    )
}

export default HeaderTrello