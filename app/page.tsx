// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Brain, Heart, Users, Shield, Zap, Globe } from "lucide-react"

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
//       {/* Hero Section */}
//       <section className="container mx-auto px-4 py-16 text-center">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-5xl font-bold text-gray-900 mb-6">Your Mental Wellness Journey Starts Here</h1>
//           <p className="text-xl text-gray-600 mb-8 leading-relaxed">
//             MindBridge combines AI-powered support, professional therapy, and personal tracking tools to help you
//             achieve better mental health. Available 24/7, private, and designed for your unique needs.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link href="/register">
//               <Button size="lg" className="px-8 py-3 text-lg">
//                 Start Your Journey
//               </Button>
//             </Link>
//             <Link href="/login">
//               <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
//                 Sign In
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="container mx-auto px-4 py-16">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Mental Health Support</h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Everything you need to understand, track, and improve your mental wellness in one platform.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <Card className="hover:shadow-lg transition-shadow">
//             <CardHeader>
//               <Brain className="h-12 w-12 text-blue-600 mb-4" />
//               <CardTitle>AI Mental Health Assistant</CardTitle>
//               <CardDescription>
//                 24/7 support with evidence-based coping strategies, active listening, and crisis detection.
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <ul className="text-sm text-gray-600 space-y-2">
//                 <li>• Personalized responses based on your history</li>
//                 <li>• Crisis intervention and resource connection</li>
//                 <li>• CBT and mindfulness techniques</li>
//               </ul>
//             </CardContent>
//           </Card>

//           <Card className="hover:shadow-lg transition-shadow">
//             <CardHeader>
//               <Heart className="h-12 w-12 text-red-600 mb-4" />
//               <CardTitle>Mood & Wellness Tracking</CardTitle>
//               <CardDescription>
//                 Track your daily mood, activities, and triggers to identify patterns and improve your mental health.
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <ul className="text-sm text-gray-600 space-y-2">
//                 <li>• Daily mood check-ins with insights</li>
//                 <li>• Activity and trigger correlation</li>
//                 <li>• Progress visualization and trends</li>
//               </ul>
//             </CardContent>
//           </Card>

//           <Card className="hover:shadow-lg transition-shadow">
//             <CardHeader>
//               <Users className="h-12 w-12 text-green-600 mb-4" />
//               <CardTitle>Professional Therapist Network</CardTitle>
//               <CardDescription>
//                 Connect with licensed therapists who specialize in your specific needs and preferences.
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <ul className="text-sm text-gray-600 space-y-2">
//                 <li>• Verified, licensed professionals</li>
//                 <li>• Specialization-based matching</li>
//                 <li>• Flexible scheduling and pricing</li>
//               </ul>
//             </CardContent>
//           </Card>

//           <Card className="hover:shadow-lg transition-shadow">
//             <CardHeader>
//               <Shield className="h-12 w-12 text-purple-600 mb-4" />
//               <CardTitle>Privacy & Security First</CardTitle>
//               <CardDescription>
//                 Your mental health data is encrypted, private, and never shared without your explicit consent.
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <ul className="text-sm text-gray-600 space-y-2">
//                 <li>• End-to-end encryption</li>
//                 <li>• HIPAA compliant infrastructure</li>
//                 <li>• You control your data</li>
//               </ul>
//             </CardContent>
//           </Card>

//           <Card className="hover:shadow-lg transition-shadow">
//             <CardHeader>
//               <Zap className="h-12 w-12 text-yellow-600 mb-4" />
//               <CardTitle>Cognitive Exercises</CardTitle>
//               <CardDescription>
//                 Guided exercises for mindfulness, CBT, breathing techniques, and emotional regulation.
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <ul className="text-sm text-gray-600 space-y-2">
//                 <li>• Evidence-based techniques</li>
//                 <li>• Progressive difficulty levels</li>
//                 <li>• Track effectiveness over time</li>
//               </ul>
//             </CardContent>
//           </Card>

//           <Card className="hover:shadow-lg transition-shadow">
//             <CardHeader>
//               <Globe className="h-12 w-12 text-indigo-600 mb-4" />
//               <CardTitle>Global Accessibility</CardTitle>
//               <CardDescription>
//                 Available worldwide with multi-language support and culturally sensitive approaches.
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <ul className="text-sm text-gray-600 space-y-2">
//                 <li>• 24/7 availability across time zones</li>
//                 <li>• Multiple language support</li>
//                 <li>• Cultural competency training</li>
//               </ul>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-blue-600 text-white py-16">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Mental Health?</h2>
//           <p className="text-xl mb-8 opacity-90">
//             Join thousands of people who are already improving their mental wellness with MindBridge.
//           </p>
//           <Link href="/register">
//             <Button size="lg" variant="secondary" className="px-8 py-3 text-lg">
//               Get Started Free
//             </Button>
//           </Link>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-12">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-lg font-semibold mb-4">MindBridge</h3>
//               <p className="text-gray-400">Empowering mental wellness through technology and human connection.</p>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-4">Features</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li>AI Assistant</li>
//                 <li>Mood Tracking</li>
//                 <li>Therapist Network</li>
//                 <li>Cognitive Exercises</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-4">Support</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li>Crisis Resources</li>
//                 <li>Help Center</li>
//                 <li>Contact Us</li>
//                 <li>Privacy Policy</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-4">Crisis Resources</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li>Suicide Prevention: 988</li>
//                 <li>Crisis Text: 741741</li>
//                 <li>Emergency: 911</li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
//             <p>&copy; 2024 MindBridge. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }




import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceTags from "@/components/ServiceTags";
import EnhancedAboutSection from "@/components/EnhancedAboutSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import DailyQuoteSection from "@/components/DailyQuoteSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServiceTags />
      <EnhancedAboutSection />
      <ServicesSection />
      <TeamSection />
      <TestimonialsSection />
      <BlogSection />
      <DailyQuoteSection />
      <PricingSection />
      <FAQSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;