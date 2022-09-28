export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  console.log(context);
  return {
    props: { infoId: context.params.id },
  };
};

export const DetailInfo = ({ infoId }) => {
  //   const { slug } = router.slug;
  return <div>DetailInfo: {infoId}</div>;
};

export default DetailInfo;
