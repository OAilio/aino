type Props = {
  className?: string;
  // define your other props here
};

export const AboutText: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={`flex flex-col flex-1 gap-4 lg:gap-4 p-4 ${className ?? ''}`}
    >
      <h3 className="text-lg font-medium">Get to know me!☀️</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nibh
        est, dapibus non finibus eget, ultrices eu mi. Etiam finibus orci
        ligula, non porta magna ultrices eget. Proin dignissim sodales diam,
        eget auctor enim consectetur non. Phasellus eget odio condimentum,
        consequat turpis at, pretium orci. Sed eget gravida est. Mauris non
        felis velit. Sed posuere convallis diam vitae auctor.
        <br />
        <br />
        Curabitur varius posuere pharetra. Nullam maximus neque quis mi
        hendrerit, eget dapibus lorem efficitur. Pellentesque rutrum condimentum
        erat eget rutrum. Fusce gravida ipsum et tortor feugiat, nec sodales
        neque tempor. Praesent malesuada aliquet nibh id tincidunt. Praesent
        quis quam id nunc porta facilisis. Mauris blandit sed dolor non pretium.
        Integer at luctus quam. Nam semper, urna sed gravida tristique, urna
        magna rutrum ligula, a ullamcorper nisl nunc nec sem. Nulla laoreet
        pretium erat dictum dignissim. Etiam nisl purus, ultricies et nunc sit
        amet, elementum ultrices nunc. Aliquam nulla urna, dignissim vel purus
        quis, hendrerit sodales augue. Vivamus id libero hendrerit, ullamcorper
        mauris id, placerat sapien.
        <br />
        <br />
        Mauris sed turpis vel leo tempor pellentesque consectetur at dolor.
        Aliquam sollicitudin ex sed ipsum aliquam semper. Nam vulputate turpis
        sit amet lacus eleifend, porta feugiat turpis malesuada. Praesent ut
        rhoncus quam, a laoreet orci.
      </p>
    </div>
  );
};
