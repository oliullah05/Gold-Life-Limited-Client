
type SectionTitleProps = {
    Title: string;
    subTitle: string;
  };
  
  const SectionTitle: React.FC<SectionTitleProps> = ({ Title, subTitle }) => {
    return ( 
      <div className=" mb-8">
        <h2 className="text-2xl  text-underLine-animation text-primary_color">{Title}</h2>
        <p className="text-4xl text-secondary_color font-bold  ">{subTitle}</p>
        
      </div>
    );    
  };
  
  export default SectionTitle;
  