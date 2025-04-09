import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { generateBreadcrumbSchema, generateSchemaScript } from '@/lib/structuredData';

interface BreadcrumbContainerProps {
  customItems?: { name: string; path: string }[];
}

const BreadcrumbContainer: React.FC<BreadcrumbContainerProps> = ({ customItems }) => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  // Generate breadcrumb items
  const items = customItems || pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
    return {
      name: segment.charAt(0).toUpperCase() + segment.slice(1),
      path,
    };
  });

  // Generate schema.org breadcrumb data
  const breadcrumbSchema = generateBreadcrumbSchema(
    items.map(item => ({
      name: item.name,
      item: `${window.location.origin}${item.path}`,
    }))
  );

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Breadcrumb className="py-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/" className="text-stoic-green hover:text-stoic-green-light">
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          {items.map((item, index) => (
            <React.Fragment key={item.path}>
              <BreadcrumbItem>
                {index === items.length - 1 ? (
                  <BreadcrumbPage>{item.name}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link 
                      to={item.path}
                      className="text-stoic-green hover:text-stoic-green-light"
                    >
                      {item.name}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < items.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};

export default BreadcrumbContainer;
