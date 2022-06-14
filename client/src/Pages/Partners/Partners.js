import React from 'react';
import GenJumbo from '../../Components/GeneralJumbotron/GenJumbo';
import EEOI from './images/Electro_Optical.png'
import Photodigm from './images/Photodigm.png'
import Electronic_Enterprises from './images/EEIPL.png'
import DMD from './images/DMD2.png'

const Partners = () => {

    const partnerStyles = {
        partnerCard: {
            marginBottom: "10%",
            marginLeft: "10%",
            marginRight: "10%",
            height: "600px",
        },
    }

    const partners = [
        {
            name: "ElectroOptical Innovations Consulting",
            desc: "Highland has partnered with ElectroOptical Innovations Consulting to develop extreme-performance photonic instruments.",
            logo: EEOI,
            link: "https://electrooptical.net/",
        },
        {
            name: "Photodigm",
            desc: "Highland has integrated its T165 picosecond to nanosecond laser driver with Photodigm’s DBR 1064-nm butterfly laser. The configuration is ideal for OEM use in laser systems. The module has an onboard pulse width generator for optical pulse widths <100 ps to 850 ns and provides laser currents from 0 mA to 700 mA. The small footprint of the laser and driver package enables design into embedded applications.",
            logo: Photodigm,
            link: "http://www.photodigm.com/",
        },
        {
            name: "Daiei Musen Denki Co., Ltd.",
            desc: "Founded in 1957, Daiei Musen Denki Co., Ltd (DMD) is a Japanese importer of high quality electronic products. Located in Tokyo’s famed Akihabara district, DMD provides skilled installation, training, and long-term customer support. DMD is an official distributor of Highland Technology products in Japan.",
            logo: DMD,
            link: "http://www.daiei-dmd.co.jp/",
        },
        {
            name: "Electronic Enterprises (India) Pvt. Ltd.",
            desc: "Electronic Enterprises (India) Pvt. Ltd. has been in operation since 1952. Over the years, the company has built up a reputation of sound and transparent business practices, efficient services after sales, and unfailing courtesy. The organization offers top quality electronic components, test instruments, nuclear detectors and instruments, scientific instruments, and semiconductor machinery.",
            logo: Electronic_Enterprises,
            link: "http://www.eeipl.in/",
        },
    ]

    return (
        <div>
            <div>
                <GenJumbo />
            </div>
            
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {partners.map((partner, index) => (
                    <>
                        <div className="col">
                            <div className="card" key={index} style={partnerStyles.partnerCard}>
                                <img src={partner.logo} className="card-img-top" alt={partner.name}/>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{partner.name}</h5>
                                    <p className="card-text">{partner.desc}</p>
                                    <a href={partner.link} className="btn btn-outline-primary mt-auto">Visit {partner.name}</a>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}

export default Partners
