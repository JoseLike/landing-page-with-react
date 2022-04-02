import React from "react";

const Cards = () => {
	return (
		<div className="col">
			<div className="card" style={{ width: "18rem" }}>
				<img
					className="card-img-top"
					src="https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/d1/d1fab91c-8d90-4688-bcff-fb50b5efae5c?jwt=eyJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1ODI1NzU3NzcsImV4cCI6MTgwMTU1NzkwMCwicnFzIjoiR0VUXFwvdGVuYW50cy9jN2UyYjljMS04NDgwLTQzYjAtYWQ5ZS0wMDBjMTdhYTJjYmIvZG9tYWlucy83MTgzMDJiNi01MzQzLTQzZDMtYThhMy04MjlkYzNkYTA4OTMvYnVja2V0cy82ZjNhYjFjYy01OTIwLTRmNGUtYjEzMS00NmE0NTg3YTBlMWYvaW1hZ2VzL2QxL2QxZmFiOTFjLThkOTAtNDY4OC1iY2ZmLWZiNTBiNWVmYWU1YyIsIm1ldGFkYXRhIjp7InJ1bGUiOnsidmVyc2lvbiI6IjIwMTYtMTAiLCJhY3Rpb25zIjpbXX19fQ.kmA925Z_ddcKizZXUjtwIjqZyQetoT8ztNP6Fzlezva22ltsCIAK01a3WHhSH1NobQuhzY03keapGZDnitjC-WKuDTCSKPr3Sdmht3bwPtp2M1xRg708TXYBOLkhBFUqNPrt_zPfZwEfjW91El3zh0T3vu8GqYqxCyR5FtZgmU-boTbUxLEvc4p46-yjZHkBdbbEzdOiY1Uxmg4ouwLlCU5ItG2vARwgFpoLYlYuCafK2QxdoXYcbgXS2nOGpyncGiD3BCBov5IL3CHQ5k84M2iCQOA9JrlYEBLZAgKpAMgOT_ddQfTUm0SIMYSZjwgHKtNHELCrm4Gymk3XV-QHSg&AccessKeyId=d724d9a53d95a810"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};

export default Cards;
