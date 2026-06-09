interface PageHeaderProps {
    title: string;
    description?: string;
  }
  
  export default function PageHeader({ title, description }: PageHeaderProps) {
    return (
      <div className="bg-julu-cream py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-julu-teal mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      </div>
    );
  }