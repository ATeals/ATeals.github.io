import TimeLine from "@/pageComponents/Home/TimeLine";

export default () => {
    return (
        <>
            <section className="mx-6 md:flex">
                <img
                    src="https://avatars.githubusercontent.com/u/125727432?v=4"
                    alt="profileImg"
                    width={200}
                    height={200}
                    className="rounded-[25px] mr-10"
                />
                <section className="text-md md:text-xl [&>*]:mb-3 m-5">
                    <h1>안녕하세요!</h1>
                    <h1>
                        <strong className="text-blue">쇠오리</strong>로 활동하고 있는 김민우입니다.
                    </h1>
                    <h1>
                        맛있는 <strong className="text-blue">코드</strong>를 작성하기 위해 재료를 보관하는 창고입니다.
                    </h1>
                </section>
            </section>
            <TimeLine />
        </>
    );
};
