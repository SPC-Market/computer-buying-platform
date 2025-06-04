import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Advantages from "@/components/Advantages";
import EvaluationForm from "@/components/EvaluationForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Categories />
      <Advantages />
      <EvaluationForm />
      <Footer />
    </div>
  );
};

export default Index;
