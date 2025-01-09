function Banner({ type }) {
	if (type === "partneri") {
		return (
			<div className="text-2xl text-slate-800 font-bold py-10 text-center bg-white border-2 border-slate-50 shadow-xl shadow-slate-300 mb-[50px]">
				Naši partneri u zdravlju
			</div>
		);
	}

	return (
		<div className="text-2xl text-slate-800 font-bold py-10 text-center bg-white border-2 border-slate-50 shadow-xl shadow-slate-300 mb-[100px]">
			Vratite se bezbolno u život
		</div>
	);
}

export default Banner;
