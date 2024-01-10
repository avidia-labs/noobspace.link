import { PageProps } from '@/.next/types/app/layout';
import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'
dotenv.config()

const prisma = new PrismaClient();

export default async function Page({ params }: PageProps) {
    const { shortCode } = params;
    const data = await prisma.shortenedUrl.findUnique({
        where: {
          shortCode: shortCode,
        },
      })

    return (
        <>
        <head>
            <title>{data?.title}</title>
            <meta name="description" content={data?.title} />
            <meta httpEquiv="refresh" content={`1; URL=${data?.originalUrl}`} />
        </head>
        <section className="bg-gray-1 py-20 dark:bg-dark lg:py-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-gray-1 px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
                <div className="mb-10 text-center md:mb-16">
                    <h1>Redirecting....</h1>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </section>
                    </>
    );
}