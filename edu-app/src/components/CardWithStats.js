import {
  createStyles,
  Card,
  Image,
  Text,
  Group,
  rem,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[7]
        : theme.white,
  },

  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark'
        ? theme.colors.dark[5]
        : theme.colors.gray[2]
    }`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
  },
}));

interface CardWithStatsProps {
  image: string;
  title: string;
  description: string;
}

function CardWithStats({
  image,
  title,
  description,
  className,
}: CardWithStatsProps) {
  const { classes } = useStyles();

  return (
    <Card
      withBorder
      padding="lg"
      className={`${classes.card} ${className}`}
    >
      <Card.Section>
        <Image src={image} alt={title} height={120} />
      </Card.Section>

      <Group position="apart" mt="xl">
        <Text fz="sm" fw={700} className={classes.title}>
          {title}
        </Text>
      </Group>
      <Text mt="sm" mb="md" c="dimmed" fz="xs">
        {description}
      </Text>
    </Card>
  );
}

export default CardWithStats;
