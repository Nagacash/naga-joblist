ALTER TABLE public.agent_runs
  ADD COLUMN IF NOT EXISTS country_searched text;
