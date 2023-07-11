export default function Banners() {
    const zones = {
        "host": [
            "wwww.amainhobbies.com",
            "www.amaindistributing.com",
            "www.rcplanet.com"
        ],
        "zones": [
            "Brand - Lower Content",
            "Brand - Middle Override Content",
            "Brand - Upper Content",
            "Email - Footer Zone",
            "Email Newsletter - Footer Zone",
            "Header - Site Wide Above Logo",
            "Header - Sub-Categories",
            "Marketing Zone - Above Primary Slider",
            "Marketing Zone - Ads Rotator",
            "Marketing Zone - Ads Rotator Override",
            "Marketing Zone - Alternate Category Layout",
            "Marketing Zone - Category Navigation",
            "Marketing Zone - Center Banner",
            "Marketing Zone - Gift Cards",
            "Marketing Zone - Lower Content Block",
            "Marketing Zone - Newsletter",
            "Marketing Zone - Newsletter Modal",
            "Marketing Zone - Primary Slider",
            "Marketing Zone - Rewards Program",
            "Marketing Zone - Slim Newsletter Signup",
            "Marketing Zone - Social Links",
            "Parts Department - Below Finder",
            "Store Location - Upper banner all stores",
            "Store Location - Content block",
            "Store Location - Lower banner store specific"
        ]
    }

    var links = zones.zones.map( (zone) => 
        <a href="https://div.php?host=" + zones.host[0] + "&zone=" + zone target="_blank">${zones.host[0] + zone}</a>
     )    

    return (
        <div>
            {links}
        </div>
    )
}